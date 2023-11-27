'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.artistArtistIdFollowingDELETE = function artistArtistIdFollowingDELETE (req, res, next, artistId, userId) {
  Default.artistArtistIdFollowingDELETE(artistId, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistArtistIdFollowingPOST = function artistArtistIdFollowingPOST (req, res, next, artistId, userId) {
  Default.artistArtistIdFollowingPOST(artistId, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdAlbumsGET = function artistsArtistIdAlbumsGET (req, res, next, artistId) {
  Default.artistsArtistIdAlbumsGET(artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdAlbumsUploadPOST = function artistsArtistIdAlbumsUploadPOST (req, res, next, body, artistId) {
  Default.artistsArtistIdAlbumsUploadPOST(body, artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdGET = function artistsArtistIdGET (req, res, next, artistId) {
  Default.artistsArtistIdGET(artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdPUT = function artistsArtistIdPUT (req, res, next, body, artistId) {
  Default.artistsArtistIdPUT(body, artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdSongsGET = function artistsArtistIdSongsGET (req, res, next, artistId) {
  Default.artistsArtistIdSongsGET(artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsArtistIdSongsUploadPOST = function artistsArtistIdSongsUploadPOST (req, res, next, body, artistId) {
  Default.artistsArtistIdSongsUploadPOST(body, artistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsGET = function artistsGET (req, res, next) {
  Default.artistsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsPOST = function artistsPOST (req, res, next, body) {
  Default.artistsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Default.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsNewPOST = function playlistsNewPOST (req, res, next, body) {
  Default.playlistsNewPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdDELETE = function playlistsPlaylistIdDELETE (req, res, next, playlistId) {
  Default.playlistsPlaylistIdDELETE(playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdGET = function playlistsPlaylistIdGET (req, res, next, playlistId) {
  Default.playlistsPlaylistIdGET(playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdPUT = function playlistsPlaylistIdPUT (req, res, next, body, playlistId) {
  Default.playlistsPlaylistIdPUT(body, playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdSongsDELETE = function playlistsPlaylistIdSongsDELETE (req, res, next, playlistId, songId) {
  Default.playlistsPlaylistIdSongsDELETE(playlistId, songId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdSongsGET = function playlistsPlaylistIdSongsGET (req, res, next, playlistId) {
  Default.playlistsPlaylistIdSongsGET(playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistsPlaylistIdSongsPOST = function playlistsPlaylistIdSongsPOST (req, res, next, body, playlistId) {
  Default.playlistsPlaylistIdSongsPOST(body, playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  Default.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGET = function searchGET (req, res, next, query, type) {
  Default.searchGET(query, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songsGenresGenreGET = function songsGenresGenreGET (req, res, next, genre) {
  Default.songsGenresGenreGET(genre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songsSongIdGET = function songsSongIdGET (req, res, next, songId) {
  Default.songsSongIdGET(songId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdDELETE = function usersUserIdDELETE (req, res, next, userId) {
  Default.usersUserIdDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdGET = function usersUserIdGET (req, res, next, userId) {
  Default.usersUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdHistoryDELETE = function usersUserIdHistoryDELETE (req, res, next, userId) {
  Default.usersUserIdHistoryDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdHistoryGET = function usersUserIdHistoryGET (req, res, next, userId) {
  Default.usersUserIdHistoryGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_playlistsDELETE = function usersUserIdLiked_playlistsDELETE (req, res, next, userId, playlistId) {
  Default.usersUserIdLiked_playlistsDELETE(userId, playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_playlistsGET = function usersUserIdLiked_playlistsGET (req, res, next, userId) {
  Default.usersUserIdLiked_playlistsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_playlistsPOST = function usersUserIdLiked_playlistsPOST (req, res, next, body, userId) {
  Default.usersUserIdLiked_playlistsPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_songsDELETE = function usersUserIdLiked_songsDELETE (req, res, next, userId, songId) {
  Default.usersUserIdLiked_songsDELETE(userId, songId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_songsGET = function usersUserIdLiked_songsGET (req, res, next, userId) {
  Default.usersUserIdLiked_songsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdLiked_songsPOST = function usersUserIdLiked_songsPOST (req, res, next, body, userId) {
  Default.usersUserIdLiked_songsPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdPUT = function usersUserIdPUT (req, res, next, body, userId) {
  Default.usersUserIdPUT(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdPreferencesGET = function usersUserIdPreferencesGET (req, res, next, userId) {
  Default.usersUserIdPreferencesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdPreferencesPUT = function usersUserIdPreferencesPUT (req, res, next, body, userId) {
  Default.usersUserIdPreferencesPUT(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdRecommended_songsGET = function usersUserIdRecommended_songsGET (req, res, next, userId) {
  Default.usersUserIdRecommended_songsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
