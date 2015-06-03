get '/' do
  erb :index
end

post '/notes' do
  p params
  note = Note.new(title: params[:title],
                  content: params[:content])
  p note
  content_type :json
  if note.save
    p note
    noteDiv = erb :"_note", layout: false, locals: {note: note}
    p noteDiv
  content_type :json
    noteDiv.to_json
  else
    {error: "post failed to save"}.to_json
  end
end

get '/login' do

end

get '/signup' do

end
