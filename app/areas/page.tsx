import { Layout } from '@/components/layout/Layout'
import AreasIndex from '@/pages_old/AreasIndex'
import { ColorfulBackground } from '@/components/ColorfulBackground'

export default function Areas() {
  return (
    <ColorfulBackground pageType="areas">
      <Layout>
        <AreasIndex />
      </Layout>
    </ColorfulBackground>
  )
}