import * as React from 'react'
import { DocSearch as AlogliaDocSearch } from '@docsearch/react'

import '@docsearch/css'

export const DocSearch = () => {
  return (
    <AlogliaDocSearch
      appId="SVT4G5LTUB"
      indexName="zhenghao"
      apiKey="057d2b982169bd823a939512229c050e"
    />
  )
}

