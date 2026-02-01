import { Layout } from '@/components/layout/Layout'
import FAQ from '@/pages_old/FAQ'
import { ColorfulBackground } from '@/components/ColorfulBackground'

export default function FAQPage() {
  return (
    <ColorfulBackground pageType="faq">
      <Layout>
        <FAQ />
      </Layout>
    </ColorfulBackground>
  )
}