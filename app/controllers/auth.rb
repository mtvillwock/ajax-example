get '/' do
  erb :index
end

post '/notes' do
  post = Post.new(title: params[:title], content: params[:content])
  content_type :json
  if post.save!
    post.to_json
  else
    {error: "post failed to save"}.to_json
  end
end

get '/login' do

end

get '/signup' do

end
