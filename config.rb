# General config
# http://localhost:4567/__middleman

# Import custom libraries and helpers
Dir['./*/*.rb'].each { |file| load file }

# Load Sass from node_modules
config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |config|
  config.browsers = '>0.25%, not ie 11, not op_mini all, not dead'
end

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'yarn run build' : 'yarn run start',
  source: 'dist',
  latency: 1

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

configure :development do
  set      :debug_assets, true
end

configure :build do
  ignore   File.join(config[:js_dir], '*') # handled by webpack
  set      :relative_links, true
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :relative_assets
end

activate :directory_indexes

projects = [
  { project_name: "simple", content: "<b>Simple Portfolio</b> was built as the final project of 9 weeks coding bootcamp. It is a web application that aids individual investors to consolidate portfolios into one application even when users have their assets across multiple platforms. The app was built in a group of three and I was the lead developer. I proposed the project and took a major role in organizing the development. <a href='https://single-portfolio.herokuapp.com/'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/simple_portfolio'><i class='fab fa-github'></i></a>"},
  { project_name: "redux-chat", content: "<b>React Redux Chat</b> is a simple chat application made with React and Redux. Backend of the application is handled with Message API, which is a RESTful API I made with Rails for this application. <a href='https://suzukiryuichiro.github.io/chat/'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/chat'><i class='fab fa-github'></i></a>" },
  { project_name: "booze", content: "<b>Powered by Booze</b> was the first rails application I ever built. The purpose of the application is to list a variety of cocktails with their recipes. I enjoyed writing APIs that enabled the AJAX autofill search feature. Also, the application utilizes APIs to collect real data and photos to seed the database. Users can add cocktails and also leave reviews to the cocktails. <a href='https://powered-by-booze.herokuapp.com/'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/powered-by-booze'><i class='fab fa-github'></i></a>" },
  { project_name: "napbuddies", content: "<b>Napbuddies</b> is an Airbnb style booking web application, where users can host events where other users can request to attend. People can leave reviews to other users and also search events by title or location. This was made by group of three, and I was the lead developer and delegated tasks to my teammate while overseeing the whole development. I mainly took responsible in dashboard page developnment. And yes, this is a joke application 😉 <a href='https://napbuddies.herokuapp.com/'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/napbuddies'><i class='fab fa-github'></i></a>" },
  { project_name: "formula", content: "<b>Formula Gif</b> is a React <i class='devicon-react-original'></i> application that simply searches for a gif that is related to Formula 1. Users can copy the link of the gif and share anywhere they like. <a href='https://suzukiryuichiro.github.io/formula-gif/'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/formula-giphy'><i class='fab fa-github'></i></a>" },
  { project_name: "message", content: "<b>Message API</b> is an API that is built with Ruby on Rails <i class='devicon-rails-plain-wordmark'></i>. Users can GET messages from a channel, and also POST to the channel using the same endpoint. Please refer to the README in the GitHub for detailed usage. <a href='https://scooter-messages.herokuapp.com/api/v1/channels'><i class='fas fa-desktop'></i></a> <a href='https://github.com/SuzukiRyuichiro/message_api'><i class='fab fa-github'></i></a>" }
]

projects.each do |app|
  proxy "/projects/#{app[:project_name]}.html", "/projects/template.html", :locals => app
end

