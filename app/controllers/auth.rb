get '/' do
  erb :index
end

post '/notes' do
  note = Note.new(title: params[:title],
                  content: params[:content])
  content_type :json

  if note.save
    noteDiv = erb :"_note", layout: false, locals: {note: note}
    # noteDiv is an html string built by the ERB method
    # specifying layout false ensures it only builds the
    # partial '_note' and excludes the layout ERB file
    # specifying locals gives the '_note' partial access
    # to the note object you pass as the variable 'note'
    noteDiv.to_json
  else
    {error: "post failed to save"}.to_json
  end
end

get '/login' do

end

get '/signup' do

end
