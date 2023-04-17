import urlModel from "../models/urlModel";

export const update_stats = async (slug: string) => {
  try {
    let found_slug = await urlModel.findOne({ slug });
    console.log({ found_slug });
    if (!found_slug) return false;
    let {
      visitations: { first_visit, last_visit, count },
    } = found_slug;

    let update_visitation = await urlModel.updateOne(
      { slug },
      {
        visitations: {
          first_visit: first_visit ? first_visit : new Date(),
          last_visit: new Date(),
          count:count + 1
        },
      }
    );
  } catch (error: any) {
    console.log({ error });
  }
};
