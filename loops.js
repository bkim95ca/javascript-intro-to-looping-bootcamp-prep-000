function maybeTrue() {
  return Math.random() >= 0.5
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!")
}
