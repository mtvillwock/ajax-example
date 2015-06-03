get '/' do
  erb :index
end

post '/notes' do
  note = Note.new(title: params[:title], content: params[:content])
  content_type :json
  if note.save!
    note.to_json
  else
    {error: "post failed to save"}.to_json
  end
end

get '/login' do

end

get '/signup' do

end
