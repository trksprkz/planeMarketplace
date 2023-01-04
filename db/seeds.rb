9.times do |i|
  Plane.create(
    name: "Plane #{i + 1}",
    price: 1495000,
    location: "Iowa, United State"
  )
end
