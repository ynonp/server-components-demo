import HelloWorld from './components/hello_world'

export default function Home() {
  return (
    <main>
      <HelloWorld name="Dave" />
      <HelloWorld name="Dana" />
      <HelloWorld />
    </main>
  )
}
