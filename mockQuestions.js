// mockQuestions.js
export const questions = [
  {
    id: 1,
    type: "image-choice",
    question: "Manakah hewan yang memiliki kaki dua?",
    options: [
      { label: "Kucing", image: "src/assets/img/testImage/kucing.png" },
      { label: "Gajah", image: "src/assets/img/testImage/gajah.png" },
      { label: "Pinguin", image: "src/assets/img/testImage/pinguin.png" },
      { label: "Kuda", image: "src/assets/img/testImage/kuda.png" }
    ],
    correctAnswer: "Pinguin"
  },
  {
    id: 2,
    type: "count-object",
    question: "Ada berapa apel di gambar berikut?",
    image: "src/assets/img/testImage/apel.png",
    options: ["3", "5", "7", "9"],
    correctAnswer: "7"
  },
  {
    id: 3,
    type: "compare-image",
    question: "Kolam manakah yang lebih banyak ikannya?",
    leftImage: "src/assets/img/testImage/kolamA.png",
    rightImage: "src/assets/img/testImage/kolamB.png",
    options: ["Kanan", "Kiri", "Sama banyak"],
    correctAnswer: "Kanan"
  },
  {
    id: 4,
    type: "image-choice",
    question: "Manakah hewan yang bisa terbang?",
    options: [
      { label: "Elang", image: "src/assets/img/testImage/elang.png" },
      { label: "Kucing", image: "src/assets/img/testImage/kucing.png" },
      { label: "Anjing", image: "src/assets/img/testImage/anjing.png" },
      { label: "Sapi", image: "src/assets/img/testImage/sapi.png" }
    ],
    correctAnswer: "Elang"
  },
  {
    id: 5,
    type: "count-object",
    question: "Ada berapa apel di gambar berikut?",
    image: "src/assets/img/testImage/apel.png",
    options: ["4", "6", "8", "10"],
    correctAnswer: "6"
  },
  {
    id: 6,
    type: "compare-image",
    question: "Kolam manakah yang lebih sedikit ikannya?",
    leftImage: "src/assets/img/testImage/kolamA.png",
    rightImage: "src/assets/img/testImage/kolamB.png",
    options: ["Kolam C", "Kolam D"],
    correctAnswer: "Kolam D"
  },
  {
    id: 7,
    type: "image-choice",
    question: "Pilih hewan yang hidup di air",
    options: [
      { label: "Ikan", image: "src/assets/img/testImage/ikan.png" },
      { label: "Kucing", image: "src/assets/img/testImage/kucing.png" },
      { label: "Ayam", image: "src/assets/img/testImage/ayam.png" },
      { label: "Kuda", image: "src/assets/img/testImage/kuda.png" }
    ],
    correctAnswer: "Ikan"
  },
  {
    id: 8,
    type: "count-object",
    question: "Hitung jumlah apel di gambar berikut",
    image: "src/assets/img/testImage/apel.png",
    options: ["2", "5", "6", "8"],
    correctAnswer: "5"
  },
  {
    id: 9,
    type: "compare-image",
    question: "Kolam mana yang lebih banyak ikannya?",
    leftImage: "src/assets/img/testImage/kolamA.png",
    rightImage: "src/assets/img/testImage/kolamB.png",
    options: ["Kiri", "Kanan"],
    correctAnswer: "Kanan"
  },
  {
    id: 10,
    type: "image-choice",
    question: "Pilih hewan yang memiliki belalai",
    options: [
      { label: "Gajah", image: "src/assets/img/testImage/gajah.png" },
      { label: "Singa", image: "src/assets/img/testImage/singa.png" },
      { label: "Sapi", image: "src/assets/img/testImage/sapi.png" },
      { label: "Kucing", image: "src/assets/img/testImage/kucing.png" }
    ],
    correctAnswer: "Gajah"
  }
];