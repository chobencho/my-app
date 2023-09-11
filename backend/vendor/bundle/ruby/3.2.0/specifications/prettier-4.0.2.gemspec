# -*- encoding: utf-8 -*-
# stub: prettier 4.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "prettier".freeze
  s.version = "4.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Kevin Newton".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-07-14"
  s.executables = ["rbprettier".freeze]
  s.files = ["exe/rbprettier".freeze]
  s.homepage = "https://github.com/prettier/plugin-ruby#readme".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.7.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "prettier plugin for the Ruby programming language".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<syntax_tree>.freeze, [">= 4.0.1"])
  s.add_runtime_dependency(%q<syntax_tree-haml>.freeze, [">= 2.0.0"])
  s.add_runtime_dependency(%q<syntax_tree-rbs>.freeze, [">= 0.2.0"])
  s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
end
