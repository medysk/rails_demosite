require 'vcr'

VCR.configure do |c|
  c.cassette_library_dir = 'spec/vcr'
  c.hook_into :webmock
  c.configure_rspec_metadata!
  c.ignore_localhost = true

  Rails.application.secrets.each do |k, v|
    next unless v.is_a? String

    c.filter_sensitive_data("<#{k.upcase}>") { v }
  end
end
