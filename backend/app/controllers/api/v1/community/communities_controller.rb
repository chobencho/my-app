class Api::V1::Community::CommunitiesController < ApplicationController
  def index
    @community = Community.joins(:community_category).select('communities.*, community_categories.community_code')
    render json: @community
  end

  def show
    @community = Community.joins(:community_users, :community_category).select("*, community_users.community_id AS id, community_users.user_id AS user_id, community_categories.community_code").where(community_users: {user_id: params[:id]})
    render json: @community
  end

  # Community.joins(:community_category).select('communities.*, community_categories.community_code').where(id: uniq_latest_community_ids)

  def create
    community = CommunityUser.new(subscribe_params)
    if community.save
      render json: {status: 200, message: "success subscribe community!"}
    else
      render json: {status: 200, message: "failed subscribe community!"}
    end
  end

  def destroy
    @community = CommunityUser.find_by(community_id: params[:id], user_id: params[:user_id])
    if @community.delete
      render json: {stutas: 200, message: "success withdraw community!"}
    else
      render json: {stutas: 400, message: "failed withdraw community!"}
    end
  end

  def popular
    # 最新のコメントの更新順に、対応するcommunity_idを3つ取得
    latest_community_ids = CommunityComment.order(updated_at: :desc).pluck(:community_id)
    uniq_latest_community_ids = latest_community_ids.uniq.take(3)
    # latest_community_idsを使ってCommunityテーブルからデータを取得
    # latest_communities = Community.where(id: uniq_latest_community_ids)
    latest_communities = Community.joins(:community_category).select('communities.*, community_categories.community_code').where(id: uniq_latest_community_ids)
    render json: latest_communities
  end

  def latest
    @community = Community.joins(:community_category).select('communities.*, community_categories.community_code').order(created_at: :asc).limit(3)
    render json: @community
  end

  def sendMail
    id = params[:string_my_id]
    title = params[:title]
    body = params[:body]

    ContactMailer.apply_email(id, title, body).deliver_now
    render json: {status: 200, message: "新規コミュニティの申請に成功しました。"}
end

  private

  def subscribe_params
    params.permit(:community_id, :user_id)
  end
end
