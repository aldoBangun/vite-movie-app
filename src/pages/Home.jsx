const dummyData = Array.from({ length: 100 })

export default function Home() {
  return dummyData.map((item) => (
    <p key={item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, debitis.</p>
  ))
}
