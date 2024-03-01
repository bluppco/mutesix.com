import { z, defineCollection } from "astro:content";

const footerCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),

	})

})

export const collections = {

	"footer": footerCollection,

}
