import { Layout } from '@/components/layout/Layout'
import About from '@/pages_old/About'
import { ColorfulBackground } from '@/components/ColorfulBackground'

export default function AboutPage() {
  return (
    <ColorfulBackground pageType="about">
      <Layout>
        <About />
      </Layout>
    </ColorfulBackground>
  )
}