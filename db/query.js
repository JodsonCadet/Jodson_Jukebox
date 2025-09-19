import db from "./client.js";

export async function createPlaylist_track() {
  const result = await db.query(
    try {
      `
      INSERT INTO playlists (playlist_name)
      INSERT INTO  (playlist_description)
      VALUES ($1, $2)
      RETURNING *;
    `,
    const {row : playlist } = await db.query(sql, [playlist_name, playlist_description]);
    console.log(Track);
  return track;
  
}
} catch (error) {
  console.error(error);
  throw error;
}
}