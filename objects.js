var playlist = {creed: ''}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}