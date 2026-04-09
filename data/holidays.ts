export interface Holiday {

  date: string;

  title: string;

  color: string;

  image: string;

  description: string;

  startYear?: string;

}

export const holidays: Holiday[] = [

{
date: "2026-03-04",
title: "Holi",
color: "#ff6b6b",
image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
description:
"Festival of colors celebrating victory of good over evil and arrival of spring.",
startYear: "Ancient India"
},

{
date: "2026-04-10",
title: "Mahavir Jayanti",
color: "#ffd93d",
image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
description:
"Birth anniversary of Lord Mahavira, the 24th Tirthankara of Jainism.",
startYear: "599 BCE"
},

{
date: "2026-04-03",
title: "Good Friday",
color: "#60a5fa",
image: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
description:
"Christian observance commemorating crucifixion of Jesus Christ.",
startYear: "1st century"
},

{
date: "2026-04-05",
title: "Easter",
color: "#34d399",
image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
description:
"Christian festival celebrating resurrection of Jesus Christ.",
startYear: "2nd century"
},

{
date: "2026-10-24",
title: "Dussehra",
color: "#fb923c",
image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
description:
"Celebrates victory of Lord Rama over Ravana.",
startYear: "Ancient India"
},

{
date: "2026-11-01",
title: "Diwali",
color: "#f59e0b",
image: "https://images.unsplash.com/photo-1606486838940-3b7b2f6b2e36",
description:
"Festival of lights symbolizing victory of light over darkness.",
startYear: "Ancient India"
},

{
date: "2026-03-20",
title: "Eid al-Fitr",
color: "#22c55e",
image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa",
description:
"Islamic festival marking end of Ramadan fasting.",
startYear: "624 CE"
}

];