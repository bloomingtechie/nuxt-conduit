import { defineVitestConfig,
} from '@nuxt/test-utils/config'
import { BASE_API_URL } from './lib/constants'

export default defineVitestConfig ({
  test: {
    fileParallelism: false,
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
        overrides: {
          app: {
            // baseURL: BASE_API_URL,
          },
        },
      },
    },
  },
})
