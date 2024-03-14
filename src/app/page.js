import Navbar from "@/components/modules/navbar";
import Articles from "@/components/templates/index/articles";
import Banner from "@/components/templates/index/banner";
import Latest from "@/components/templates/index/latest";
import Promote from "@/components/templates/index/promote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
    </main>
  )
}
