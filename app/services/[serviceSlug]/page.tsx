import { Layout } from '@/components/layout/Layout'
import ServicePage from '@/pages_old/ServicePage'

export default function Service({ params }: { params: { serviceSlug: string } }) {
  return (
    <Layout>
      <ServicePage />
    </Layout>
  )
}