# -*- encoding: utf-8 -*-
# stub: syntax_tree-rbs 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "syntax_tree-rbs".freeze
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "rubygems_mfa_required" => "true" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Kevin Newton".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-03-07"
  s.email = ["kddnewton@gmail.com".freeze]
  s.homepage = "https://github.com/ruby-syntax-tree/syntax_tree-rbs".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.10".freeze
  s.summary = "Syntax Tree support for RBS".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<prettier_print>.freeze, [">= 0"])
  s.add_runtime_dependency(%q<rbs>.freeze, [">= 0"])
  s.add_runtime_dependency(%q<syntax_tree>.freeze, [">= 2.0.1"])
  s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
end
