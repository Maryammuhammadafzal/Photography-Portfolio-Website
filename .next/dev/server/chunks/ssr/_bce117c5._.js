module.exports = [
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/admin-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sample admin data for demonstration
__turbopack_context__.s([
    "sampleBookings",
    ()=>sampleBookings,
    "sampleSupportTickets",
    ()=>sampleSupportTickets
]);
const sampleBookings = [
    {
        id: "1",
        name: "Ali Hassan",
        phone: "+92 300 1234567",
        secondaryPhone: "+92 321 9876543",
        eventDate: "2024-12-15",
        location: "Lahore, Royal Palm",
        package: "premium",
        status: "confirmed",
        createdAt: "2024-11-01"
    },
    {
        id: "2",
        name: "Sara Khan",
        phone: "+92 333 4567890",
        eventDate: "2024-12-20",
        location: "Karachi, Pearl Continental",
        package: "gold",
        status: "pending",
        createdAt: "2024-11-05"
    },
    {
        id: "3",
        name: "Bilal Ahmed",
        phone: "+92 345 6789012",
        eventDate: "2024-11-25",
        location: "Islamabad, Serena Hotel",
        package: "silver",
        status: "completed",
        createdAt: "2024-10-20"
    },
    {
        id: "4",
        name: "Ayesha Malik",
        phone: "+92 312 3456789",
        eventDate: "2025-01-10",
        location: "Lahore, Haveli Khalil Khan",
        package: "premium",
        status: "pending",
        createdAt: "2024-11-10"
    },
    {
        id: "5",
        name: "Usman Shah",
        phone: "+92 300 9876543",
        eventDate: "2025-01-05",
        location: "Faisalabad, Chenab Club",
        package: "gold",
        status: "confirmed",
        createdAt: "2024-11-08"
    }
];
const sampleSupportTickets = [
    {
        id: "1",
        name: "Fatima Ali",
        email: "fatima@email.com",
        phone: "+92 300 1111222",
        subject: "Question about Premium Package",
        message: "I would like to know if the outdoor couple shoot can be done at a different location than the wedding venue?",
        status: "open",
        createdAt: "2024-11-10"
    },
    {
        id: "2",
        name: "Hassan Raza",
        email: "hassan@email.com",
        subject: "Payment Inquiry",
        message: "Can I pay the advance in two installments?",
        status: "resolved",
        createdAt: "2024-11-08"
    },
    {
        id: "3",
        name: "Nadia Iqbal",
        email: "nadia@email.com",
        phone: "+92 321 5556666",
        subject: "Delivery Timeline",
        message: "When can I expect to receive my edited photos and video?",
        status: "open",
        createdAt: "2024-11-12"
    }
];
}),
"[project]/lib/blog-data.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export interface BlogPost {
//   id: string
//   slug: string
//   title: string
//   excerpt: string
//   content: string
//   featuredImage: string
//   author: string
//   authorImage: string
//   publishedAt: string
//   readTime: string
//   category: string
// }
// export const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     slug: "top-10-wedding-photography-tips",
//     title: "Top 10 Wedding Photography Tips for Pakistani Brides",
//     excerpt:
//       "Discover essential tips to ensure your wedding photos are absolutely stunning. From lighting to poses, we cover everything you need to know.",
//     content: `<p>Your wedding day is one of the most important days of your life, and capturing those precious moments is essential. Here are our top 10 tips to ensure your wedding photos are absolutely stunning.</p>
// <h2>1. Choose the Right Photographer</h2>
// <p>This is perhaps the most crucial decision you'll make. Look for a photographer who specializes in Pakistani weddings and understands the cultural nuances and traditional ceremonies. Review their portfolio extensively and meet them in person to ensure you connect well.</p>
// <h2>2. Plan Your Timeline</h2>
// <p>Pakistani weddings are elaborate affairs with multiple events. Work with your photographer to create a detailed timeline that includes enough time for each ceremony, outfit changes, and important family moments. Don't forget to allocate time for couple portraits during golden hour.</p>
// <h2>3. Scout Your Venues</h2>
// <p>Visit your wedding venues before the big day with your photographer. This helps identify the best spots for photos, understand lighting conditions, and plan backup locations in case of weather changes.</p>
// <h2>4. Consider Your Outfits</h2>
// <p>Your bridal outfits are works of art. Ensure your photographer captures the intricate details of your gharara, lehnga, or sharara. Discuss how different colors and fabrics photograph, especially under different lighting conditions.</p>
// <h2>5. Embrace Natural Light</h2>
// <p>Natural light creates the most beautiful, soft images. Try to schedule important ceremonies and portrait sessions during times when natural light is available. Morning mehndi ceremonies often produce stunning, naturally-lit photos.</p>
// <h2>6. Capture the Details</h2>
// <p>The mehndi designs, jewelry, shoes, and invitation cards all tell your story. Ensure your photographer captures these details that you've spent so much time selecting.</p>
// <h2>7. Don't Forget the Candid Moments</h2>
// <p>While posed portraits are important, the candid moments often become the most treasured photos. The laughter during the dholki, tears during the rukhsati, and joy during the baraat - these authentic emotions create timeless memories.</p>
// <h2>8. Include Family Portraits</h2>
// <p>Create a shot list for family portraits. Pakistani weddings bring together extended families, and having organized group shots ensures no one is left out. Designate a family member to help gather people for these shots.</p>
// <h2>9. Consider Drone Coverage</h2>
// <p>Drone photography adds a spectacular dimension to your wedding album. Aerial shots of the baraat, venue decorations, and outdoor ceremonies create stunning visual variety.</p>
// <h2>10. Trust Your Photographer</h2>
// <p>Once you've chosen your photographer, trust their expertise. They know the best angles, lighting, and moments to capture. Let them guide you while also communicating your must-have shots.</p>
// <p>Remember, your wedding photos are an investment that will last a lifetime. Taking the time to plan and prepare ensures you'll have beautiful memories to cherish forever.</p>`,
//     featuredImage: "/placeholder.svg?key=c2ztf",
//     author: "Fatima Shah",
//     authorImage: "/placeholder.svg?key=gf3n7",
//     publishedAt: "2024-11-15",
//     readTime: "8 min read",
//     category: "Photography Tips",
//   },
//   {
//     id: "2",
//     slug: "best-wedding-venues-lahore",
//     title: "Best Wedding Venues in Lahore for Stunning Photography",
//     excerpt:
//       "Explore the most photogenic wedding venues in Lahore that provide the perfect backdrop for your special day.",
//     content: `<p>Lahore, the heart of Pakistan, offers some of the most breathtaking venues for wedding photography. From historic havelis to modern luxury hotels, here are our top picks.</p>
// <h2>Historic Venues</h2>
// <p>The Walled City of Lahore provides an unparalleled backdrop with its Mughal architecture. Venues like Haveli Khalil Khan and other restored havelis offer authentic Pakistani aesthetics that photograph beautifully.</p>
// <h2>Luxury Hotels</h2>
// <p>Properties like PC Hotel Lahore, Nishat Hotel, and Royal Palm offer elegant indoor and outdoor spaces with professional lighting and stunning architecture.</p>
// <h2>Garden Venues</h2>
// <p>For those who prefer natural settings, venues like Lawrence Gardens and various farmhouses on the outskirts offer beautiful green spaces perfect for outdoor ceremonies.</p>
// <h2>Modern Banquet Halls</h2>
// <p>Contemporary venues like Faletti's and Café Zouk provide sleek, modern backdrops that suit couples looking for a more contemporary aesthetic.</p>
// <p>Each venue offers unique opportunities for photography. Discuss with your photographer which setting best matches your vision and the mood you want to create in your wedding album.</p>`,
//     featuredImage: "/placeholder.svg?key=p8bfx",
//     author: "Ahmed Khan",
//     authorImage: "/placeholder.svg?key=q0aij",
//     publishedAt: "2024-11-10",
//     readTime: "6 min read",
//     category: "Venues",
//   },
//   {
//     id: "3",
//     slug: "mehndi-ceremony-photography-guide",
//     title: "Complete Guide to Mehndi Ceremony Photography",
//     excerpt: "Learn how to capture the vibrant colors and joyful moments of Pakistani mehndi ceremonies.",
//     content: `<p>The mehndi ceremony is one of the most colorful and joyful events in Pakistani wedding celebrations. Here's how to ensure these moments are captured beautifully.</p>
// <h2>Understanding the Ceremony</h2>
// <p>Mehndi ceremonies are vibrant, musical events filled with dancing, singing, and the application of henna. Understanding the flow of events helps photographers anticipate and capture key moments.</p>
// <h2>Color Coordination</h2>
// <p>The traditional yellows and greens of mehndi ceremonies create a stunning visual palette. Photographers should be prepared for these bright colors and know how to balance them in photos.</p>
// <h2>Capturing the Henna Application</h2>
// <p>The intricate henna designs being applied to the bride's hands are essential shots. Close-up macro photography showcases the artistry and detail of these temporary tattoos.</p>
// <h2>Dance and Music</h2>
// <p>Action shots of the dholki and dance performances require skill to capture movement and emotion. Burst mode and appropriate shutter speeds are essential.</p>
// <h2>Candid Joy</h2>
// <p>The mehndi is often the most relaxed event, making it perfect for candid photography. The genuine smiles and laughter create some of the most treasured wedding photos.</p>`,
//     featuredImage: "/placeholder.svg?key=j6yh7",
//     author: "Sara Ahmed",
//     authorImage: "/placeholder.svg?key=duwfb",
//     publishedAt: "2024-11-05",
//     readTime: "5 min read",
//     category: "Ceremonies",
//   },
//   {
//     id: "4",
//     slug: "drone-photography-wedding-trends",
//     title: "Drone Photography: Elevating Pakistani Wedding Coverage",
//     excerpt: "Discover how drone photography is transforming wedding coverage with breathtaking aerial perspectives.",
//     content: `<p>Drone photography has revolutionized how we capture weddings, offering perspectives that were previously impossible. Here's why every Pakistani wedding should consider aerial coverage.</p>
// <h2>Baraat Processions</h2>
// <p>The grandeur of a baraat is best captured from above. Drones can follow the entire procession, showcasing the scale and excitement of this traditional arrival.</p>
// <h2>Venue Establishing Shots</h2>
// <p>Aerial views of your wedding venue create stunning opening shots for films and provide context for your wedding album.</p>
// <h2>Group Photos</h2>
// <p>Large family gatherings are perfectly captured from above, ensuring everyone is visible and creating unique geometric compositions.</p>
// <h2>Outdoor Ceremonies</h2>
// <p>Garden weddings and outdoor events benefit tremendously from aerial coverage, showcasing beautiful landscapes and decorations.</p>
// <h2>Cinematic Film Elements</h2>
// <p>For wedding films, drone footage adds production value and creates a cinematic quality that elevates the final product.</p>`,
//     featuredImage: "/placeholder.svg?key=kkfvj",
//     author: "Usman Ali",
//     authorImage: "/placeholder.svg?key=b9g2k",
//     publishedAt: "2024-10-28",
//     readTime: "4 min read",
//     category: "Technology",
//   },
//   {
//     id: "5",
//     slug: "choosing-wedding-videographer",
//     title: "How to Choose the Perfect Wedding Videographer",
//     excerpt: "A comprehensive guide to selecting a videographer who will capture your love story perfectly.",
//     content: `<p>Your wedding video is a living memory of your special day. Here's how to choose a videographer who will create a film you'll treasure forever.</p>
// <h2>Review Their Style</h2>
// <p>Videographers have distinct styles - cinematic, documentary, traditional, or a blend. Watch multiple full wedding films to understand their approach and ensure it matches your vision.</p>
// <h2>Equipment Matters</h2>
// <p>Professional 4K cameras, stabilization equipment, and quality audio recording are essential. Ask about their gear and backup equipment.</p>
// <h2>Experience with Pakistani Weddings</h2>
// <p>Multi-day Pakistani weddings require specific knowledge. Your videographer should understand the ceremonies, know when key moments occur, and capture cultural nuances.</p>
// <h2>Communication and Personality</h2>
// <p>You'll spend significant time with your videographer. Ensure they're easy to work with, responsive, and understand your expectations.</p>
// <h2>Deliverables and Timeline</h2>
// <p>Clarify what you'll receive - teasers, highlight films, full ceremony coverage - and when. Professional editing takes time, so understand realistic delivery timelines.</p>`,
//     featuredImage: "/placeholder.svg?key=vjqtq",
//     author: "Fatima Shah",
//     authorImage: "/placeholder.svg?key=gf3n7",
//     publishedAt: "2024-10-20",
//     readTime: "7 min read",
//     category: "Videography",
//   },
//   {
//     id: "6",
//     slug: "bridal-portrait-poses",
//     title: "Essential Bridal Portrait Poses Every Photographer Should Know",
//     excerpt: "Master the art of bridal portraits with these timeless poses that flatter every bride.",
//     content: `<p>Bridal portraits are among the most important images in any wedding album. Here are essential poses that create stunning results.</p>
// <h2>The Classic Over-the-Shoulder</h2>
// <p>This timeless pose showcases the bride's jewelry, makeup, and dupatta while creating an elegant, candid feel.</p>
// <h2>Walking Shots</h2>
// <p>Capturing the bride in motion, perhaps adjusting her dupatta or walking toward the camera, creates dynamic and natural images.</p>
// <h2>Detail Shots</h2>
// <p>Close-ups of hands with mehndi and rings, eyes with elaborate makeup, and the jhoomar or matha patti should be captured from multiple angles.</p>
// <h2>Full Outfit Display</h2>
// <p>Show off the entire bridal ensemble with poses that display the lehnga's work, dupatta draping, and overall outfit coordination.</p>
// <h2>Natural Moments</h2>
// <p>Some of the best portraits come from unposed moments - the bride laughing, lost in thought, or interacting with family.</p>`,
//     featuredImage: "/placeholder.svg?key=1dxn9",
//     author: "Sara Ahmed",
//     authorImage: "/placeholder.svg?key=duwfb",
//     publishedAt: "2024-10-15",
//     readTime: "5 min read",
//     category: "Photography Tips",
//   },
// ]
// export function getBlogPost(slug: string): BlogPost | undefined {
//   return blogPosts.find((post) => post.slug === slug)
// }
// export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
//   return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
// }
// lib/blog-data.ts
__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getBlogPost",
    ()=>getBlogPost
]);
async function getAllPosts(page = 1) {
    const res = await fetch(`http://localhost/photography-portfolio-backend/posts.php?page=${page}`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json(); // ← ONLY ONCE
    console.log("Raw API response:", data); // ← SEE REAL DATA
    return {
        posts: data.posts,
        totalPages: data.totalPages,
        data: data
    };
}
async function getBlogPost(slug) {
    const res = await fetch(`http://localhost/photography-portfolio-backend/post.php?slug=${slug}`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) return null;
    const post = await res.json(); // ← ONLY ONCE
    console.log("Single post:", post);
    return post;
} // export async function getAllPosts(page = 1) {
 //   const res = await fetch(
 //     `http://localhost/photography-portfolio-backend/posts.php?page=${page}`,
 //     { next: { revalidate: 3600 } }
 //   );
 //   return res.json();
 // }
 // export async function getBlogPost(slug: string) {
 //   const res = await fetch(
 //     `http://localhost/photography-portfolio-backend/post.php?slug=${slug}`,
 //     { next: { revalidate: 3600 } }
 //   );
 //   return res.ok ? res.json() : null;
 // }
}),
"[project]/lib/portfolio-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "portfolioItems",
    ()=>portfolioItems
]);
const categories = [
    {
        id: "wedding",
        label: "Wedding",
        description: "Beautiful moments from Pakistani weddings"
    },
    {
        id: "couple-shoot",
        label: "Couple Shoot",
        description: "Romantic couple photography sessions"
    },
    {
        id: "indian-album",
        label: "Indian Album",
        description: "Traditional Indian style wedding albums"
    },
    {
        id: "drones",
        label: "Drones",
        description: "Stunning aerial photography and videography"
    },
    {
        id: "teaser",
        label: "Teaser",
        description: "Short cinematic wedding teasers"
    },
    {
        id: "song-films",
        label: "Song Films",
        description: "Romantic song videos with cinematic storytelling"
    }
];
const portfolioItems = [
    // Wedding
    {
        id: "w1",
        title: "Ahmed & Fatima's Nikkah",
        category: "wedding",
        type: "image",
        src: "/pakistani-wedding-nikkah-ceremony-beautiful-couple.jpg"
    },
    {
        id: "w2",
        title: "Baraat Celebration",
        category: "wedding",
        type: "image",
        src: "/pakistani-baraat-ceremony-groom-horse-decoration.jpg"
    },
    {
        id: "w3",
        title: "Mehndi Night",
        category: "wedding",
        type: "image",
        src: "/pakistani-mehndi-ceremony-colorful-celebration.jpg"
    },
    {
        id: "w4",
        title: "Walima Reception",
        category: "wedding",
        type: "image",
        src: "/pakistani-walima-reception-elegant-couple.jpg"
    },
    {
        id: "w5",
        title: "Dholki Night",
        category: "wedding",
        type: "image",
        src: "/pakistani-dholki-ceremony-traditional-celebration.jpg"
    },
    {
        id: "w6",
        title: "Rukhsati Moment",
        category: "wedding",
        type: "image",
        src: "/pakistani-wedding-emotional-rukhsati-ceremony.jpg"
    },
    {
        id: "w7",
        title: "Bride Getting Ready",
        category: "wedding",
        type: "image",
        src: "/pakistani-bride-getting-ready-makeup-bridal.jpg"
    },
    {
        id: "w8",
        title: "Wedding Decor",
        category: "wedding",
        type: "image",
        src: "/pakistani-wedding-decoration-flowers-elegant.jpg"
    },
    // Couple Shoot
    {
        id: "c1",
        title: "Pre-Wedding Garden Shoot",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-garden-photoshoot-romantic.jpg"
    },
    {
        id: "c2",
        title: "Sunset Romance",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-sunset-romantic-photography.jpg"
    },
    {
        id: "c3",
        title: "Traditional Attire",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-traditional-dress-photoshoot.jpg"
    },
    {
        id: "c4",
        title: "Urban Love Story",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-urban-city-photoshoot-modern.jpg"
    },
    {
        id: "c5",
        title: "Palace Grounds",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-palace-heritage-photoshoot.jpg"
    },
    {
        id: "c6",
        title: "Candid Moments",
        category: "couple-shoot",
        type: "image",
        src: "/pakistani-couple-candid-laughing-romantic.jpg"
    },
    // Indian Album
    {
        id: "i1",
        title: "Royal Album Collection",
        category: "indian-album",
        type: "image",
        src: "/indian-wedding-album-royal-photography.jpg"
    },
    {
        id: "i2",
        title: "Sangeet Ceremony",
        category: "indian-album",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "i3",
        title: "Haldi Ceremony",
        category: "indian-album",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "i4",
        title: "Traditional Rituals",
        category: "indian-album",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "i5",
        title: "Bridal Portrait",
        category: "indian-album",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "i6",
        title: "Seven Vows",
        category: "indian-album",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    // Drones
    {
        id: "d1",
        title: "Venue Aerial View",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "d2",
        title: "Baraat from Above",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "d3",
        title: "Garden Wedding",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "d4",
        title: "Grand Entrance",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "d5",
        title: "Beach Wedding",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "d6",
        title: "Palace Venue",
        category: "drones",
        type: "image",
        src: "/placeholder.svg?height=600&width=800"
    },
    // Teaser
    {
        id: "t1",
        title: "Sara & Bilal Teaser",
        category: "teaser",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "t2",
        title: "Ayesha & Omar Teaser",
        category: "teaser",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "t3",
        title: "Hira & Ali Teaser",
        category: "teaser",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "t4",
        title: "Nadia & Hassan Teaser",
        category: "teaser",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    // Song Films
    {
        id: "s1",
        title: "Eternal Love - Music Video",
        category: "song-films",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "s2",
        title: "Forever Yours - Song Film",
        category: "song-films",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "s3",
        title: "Love Story - Cinematic Song",
        category: "song-films",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    },
    {
        id: "s4",
        title: "Destined Hearts",
        category: "song-films",
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/placeholder.svg?height=600&width=800"
    }
];
}),
"[project]/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/admin-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog-data.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portfolio-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdminDashboard() {
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pendingBookings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleBookings"].filter((b)=>b.status === "pending");
    const confirmedBookings = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleBookings"].filter((b)=>b.status === "confirmed");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            try {
                const { data, posts } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])();
                // console.log(data);
                setBlogPosts(posts);
                console.log("Posts loaded:", posts); // ← SEE DATA HERE
            } catch (error) {
                console.error("Failed to load posts:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    const stats = [
        {
            label: "Total Bookings",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleBookings"].length.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            change: "+12%",
            changeType: "positive"
        },
        {
            label: "Portfolio Items",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portfolio$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItems"].length.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"],
            change: "+8",
            changeType: "positive"
        },
        {
            label: "Blog Posts",
            value: blogPosts?.length?.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            change: "+2",
            changeType: "positive"
        },
        {
            label: "Open Tickets",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleSupportTickets"].filter((t)=>t.status === "open").length.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            change: "-3",
            changeType: "negative"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-foreground",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "Welcome back! Here's an overview of your business."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-foreground mt-1",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm mt-1 ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`,
                                                children: [
                                                    stat.change,
                                                    " this month"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-primary/10 p-3 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                            className: "h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Recent Bookings"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            pendingBookings.length,
                                            " pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleBookings"].slice(0, 5).map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 bg-secondary rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-foreground",
                                                            children: booking.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: [
                                                                new Date(booking.eventDate).toLocaleDateString("en-US", {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                }),
                                                                " ",
                                                                "• ",
                                                                booking.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block px-3 py-1 rounded-full text-xs font-medium ${booking.status === "confirmed" ? "bg-green-100 text-green-700" : booking.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`,
                                                            children: booking.status.charAt(0).toUpperCase() + booking.status.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mt-1 capitalize",
                                                            children: booking.package
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, booking.id, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Support Tickets"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleSupportTickets"].filter((t)=>t.status === "open").length,
                                            " open"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$admin$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleSupportTickets"].map((ticket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between p-4 bg-secondary rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-foreground",
                                                            children: ticket.subject
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mt-1",
                                                            children: [
                                                                ticket.name,
                                                                " • ",
                                                                ticket.email
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground line-clamp-1 mt-2",
                                                            children: ticket.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block px-3 py-1 rounded-full text-xs font-medium ml-4 ${ticket.status === "open" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`,
                                                    children: ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, ticket.id, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Quick Actions"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                {
                                    label: "Add Blog Post",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                    href: "/admin/blog"
                                },
                                {
                                    label: "Upload Portfolio",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"],
                                    href: "/admin/portfolio"
                                },
                                {
                                    label: "View Bookings",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                    href: "/admin/bookings"
                                },
                                {
                                    label: "Check Messages",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                    href: "/admin/support"
                                }
                            ].map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: action.href,
                                    className: "flex flex-col items-center justify-center p-6 bg-secondary rounded-xl hover:bg-primary/10 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(action.icon, {
                                            className: "h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-foreground mt-2",
                                            children: action.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_bce117c5._.js.map