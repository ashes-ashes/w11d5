# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

Bench.destroy_all
Bench.connection.execute('ALTER SEQUENCE benches_id_seq RESTART WITH 1')


User.create(
    username: "ramen",
    password: "password"
)
User.create(
    username: "gyoza",
    password: "password"
)
User.create(
    username: "sushi",
    password: "password"
)

Bench.create(
    description: "hostile divided metal 'bench' near telegraph hill",
    lat: 37.798368,
    lng: -122.402341
)

Bench.create(
    description: "hostile sloped concrete 'bench' near potrero hill",
    lat: 37.766765,
    lng: -122.396515
)

Bench.create(
    description: "planter skateboard-proofed but friendly benches on the embarcadero",
    lat: 37.791141,
    lng: -122.389845
)