import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({

    integrations: [tailwind({

		applyBaseStyles: false

	}), react(), mdx()],
  	output: "server",
  	adapter: cloudflare({

		runtime: {

		  	mode: 'local',
		  	type: 'pages'

		}

	})

})
