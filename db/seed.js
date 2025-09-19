import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  await seedPlaylist();
  await seedTracks();
}

async function seedPlaylist() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const playlist_name = faker.internet.username();
    const playlist_description = faker.company.name();

  try {
    const response = await createPlaylist({
      playlist_name,
      playlist_description
    });
    console.log(response)
  } catch (error) {
    console.error(error)
  }
 }
}

async function seedTracks() {
  // TODO
  const playlist_id = playlists.playlist_id
  const track_id = tracks.id
}