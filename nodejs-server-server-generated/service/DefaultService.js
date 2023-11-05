'use strict';


/**
 * Unfollow an artist
 *
 * artistId Integer 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.artistArtistIdFollowingDELETE = function(artistId,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Follow an artist
 *
 * artistId Integer 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.artistArtistIdFollowingPOST = function(artistId,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get albums of a specific artist
 *
 * artistId Integer 
 * returns List
 **/
exports.artistsArtistIdAlbumsGET = function(artistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "id" : 0,
  "title" : "title"
}, {
  "description" : "description",
  "id" : 0,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create and upload an album (playlist) as an artist
 *
 * body Playlist 
 * artistId Integer 
 * no response value expected for this operation
 **/
exports.artistsArtistIdAlbumsUploadPOST = function(body,artistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details of an artist
 *
 * artistId Integer 
 * returns Artist
 **/
exports.artistsArtistIdGET = function(artistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "albums" : [ {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  }, {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  } ],
  "followers" : [ 6, 6 ],
  "songs" : [ {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  }, {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  } ],
  "name" : "name",
  "genre" : "genre",
  "bio" : "bio",
  "id" : 0,
  "socialMedia" : {
    "twitter" : "twitter",
    "website" : "website",
    "facebook" : "facebook",
    "instagram" : "instagram"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update artist details
 *
 * body ArtistUpdate 
 * artistId Integer 
 * no response value expected for this operation
 **/
exports.artistsArtistIdPUT = function(body,artistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get songs by a specific artist
 *
 * artistId Integer 
 * no response value expected for this operation
 **/
exports.artistsArtistIdSongsGET = function(artistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Upload a song as an artist
 *
 * body Song 
 * artistId Integer 
 * no response value expected for this operation
 **/
exports.artistsArtistIdSongsUploadPOST = function(body,artistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of the artists on the platform
 *
 * returns List
 **/
exports.artistsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "albums" : [ {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  }, {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  } ],
  "followers" : [ 6, 6 ],
  "songs" : [ {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  }, {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  } ],
  "name" : "name",
  "genre" : "genre",
  "bio" : "bio",
  "id" : 0,
  "socialMedia" : {
    "twitter" : "twitter",
    "website" : "website",
    "facebook" : "facebook",
    "instagram" : "instagram"
  }
}, {
  "albums" : [ {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  }, {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  } ],
  "followers" : [ 6, 6 ],
  "songs" : [ {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  }, {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  } ],
  "name" : "name",
  "genre" : "genre",
  "bio" : "bio",
  "id" : 0,
  "socialMedia" : {
    "twitter" : "twitter",
    "website" : "website",
    "facebook" : "facebook",
    "instagram" : "instagram"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new artist
 *
 * body Artist 
 * returns Artist
 **/
exports.artistsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "albums" : [ {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  }, {
    "description" : "description",
    "id" : 0,
    "title" : "title"
  } ],
  "followers" : [ 6, 6 ],
  "songs" : [ {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  }, {
    "duration" : "duration",
    "artist" : "artist",
    "genre" : "genre",
    "id" : 0,
    "source" : "source",
    "title" : "title"
  } ],
  "name" : "name",
  "genre" : "genre",
  "bio" : "bio",
  "id" : 0,
  "socialMedia" : {
    "twitter" : "twitter",
    "website" : "website",
    "facebook" : "facebook",
    "instagram" : "instagram"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * User login
 *
 * body Login_body 
 * no response value expected for this operation
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new playlist
 *
 * body Playlist 
 * no response value expected for this operation
 **/
exports.playlistsNewPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a playlist
 *
 * playlistId Integer 
 * no response value expected for this operation
 **/
exports.playlistsPlaylistIdDELETE = function(playlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details of a playlist
 *
 * playlistId Integer 
 * returns Playlist
 **/
exports.playlistsPlaylistIdGET = function(playlistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update playlist details
 *
 * body PlaylistUpdate 
 * playlistId Integer 
 * no response value expected for this operation
 **/
exports.playlistsPlaylistIdPUT = function(body,playlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove a song from a playlist
 *
 * playlistId Integer 
 * songId Integer 
 * no response value expected for this operation
 **/
exports.playlistsPlaylistIdSongsDELETE = function(playlistId,songId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get songs in a playlist
 *
 * playlistId Integer 
 * returns List
 **/
exports.playlistsPlaylistIdSongsGET = function(playlistId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "duration" : "duration",
  "artist" : "artist",
  "genre" : "genre",
  "id" : 0,
  "source" : "source",
  "title" : "title"
}, {
  "duration" : "duration",
  "artist" : "artist",
  "genre" : "genre",
  "id" : 0,
  "source" : "source",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a song to a playlist
 *
 * body Song 
 * playlistId Integer 
 * no response value expected for this operation
 **/
exports.playlistsPlaylistIdSongsPOST = function(body,playlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * User registration
 *
 * body User 
 * no response value expected for this operation
 **/
exports.registerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search for songs, artists, and playlists
 *
 * query String 
 * type String  (optional)
 * returns inline_response_200
 **/
exports.searchGET = function(query,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get songs by genre
 *
 * genre String 
 * no response value expected for this operation
 **/
exports.songsGenresGenreGET = function(genre) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details of a song
 *
 * songId Integer 
 * returns Song
 **/
exports.songsSongIdGET = function(songId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "duration" : "duration",
  "artist" : "artist",
  "genre" : "genre",
  "id" : 0,
  "source" : "source",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a specific user
 *
 * userId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details of a user
 *
 * userId Integer 
 * returns User
 **/
exports.usersUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unlike a playlist
 *
 * userId Integer 
 * playlistId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdLiked_playlistsDELETE = function(userId,playlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get liked playlists of a user
 *
 * userId Integer 
 * returns List
 **/
exports.usersUserIdLiked_playlistsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "id" : 0,
  "title" : "title"
}, {
  "description" : "description",
  "id" : 0,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Like a playlist
 *
 * body Playlist 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdLiked_playlistsPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unlike a song
 *
 * userId Integer 
 * songId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdLiked_songsDELETE = function(userId,songId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get liked songs of a user
 *
 * userId Integer 
 * returns List
 **/
exports.usersUserIdLiked_songsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "duration" : "duration",
  "artist" : "artist",
  "genre" : "genre",
  "id" : 0,
  "source" : "source",
  "title" : "title"
}, {
  "duration" : "duration",
  "artist" : "artist",
  "genre" : "genre",
  "id" : 0,
  "source" : "source",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Like a song
 *
 * body Song 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdLiked_songsPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user details
 *
 * body UserUpdate 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdPUT = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user preferences
 *
 * userId Integer 
 * returns UserPreferences
 **/
exports.usersUserIdPreferencesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "settings" : {
    "theme" : "light",
    "notifications" : true
  },
  "likedPlaylists" : [ 0, 0 ],
  "preferredGenres" : [ "preferredGenres", "preferredGenres" ],
  "preferredArtists" : [ "preferredArtists", "preferredArtists" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user preferences
 *
 * body UserPreferences 
 * userId Integer 
 * no response value expected for this operation
 **/
exports.usersUserIdPreferencesPUT = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

