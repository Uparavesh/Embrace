import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    fullname: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    image: v.string(),
    followers: v.number(),
    following: v.number(),
    posts: v.number(),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  posts: defineTable({
    userId: v.id("users"),
    imageUrl: v.string(),
    storageId: v.id("_storage"),
    caption: v.optional(v.string()),
    likes: v.number(),
    comments: v.number(),
  }).index("by_user", ["userId"]),

  likes: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
  })
    .index("by_post", ["postId"])
    .index("by_user_and_post", ["userId", "postId"]),

  comments: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
    content: v.string(),
  }).index("by_post", ["postId"]),

  follows: defineTable({
    followerId: v.id("users"),
    followingId: v.id("users"),
  })
    .index("by_follower", ["followerId"])
    .index("by_following", ["followingId"])
    .index("by_both", ["followerId", "followingId"]),

  notifications: defineTable({
    receiverId: v.id("users"),
    senderId: v.id("users"),
    type: v.union(v.literal("like"), v.literal("comment"), v.literal("follow")),
    postId: v.optional(v.id("posts")),
    commentId: v.optional(v.id("comments")),
  }).index("by_receiver", ["receiverId"]),

  bookmarks: defineTable({
    userId: v.id("users"),
    postId: v.id("posts"),
  })
    .index("by_user", ["userId"])
    .index("by_post", ["postId"])
    .index("by_user_and_post", ["userId", "postId"]),

  spaces: defineTable({
    name: v.string(), // e.g., "cricket", "art", "coding"
    description: v.optional(v.string()),
  }).index("by_name", ["name"]),

  userSpaces: defineTable({
    userId: v.id("users"),
    spaceId: v.id("spaces"),
  }).index("by_user", ["userId"])
    .index("by_space", ["spaceId"])
    .index("by_user_and_space", ["userId", "spaceId"]),

  premiumContent: defineTable({
    postId: v.id("posts"),
    isPremium: v.boolean(),
    unlockCost: v.optional(v.number()), // future use if using tokens
  }).index("by_post", ["postId"]),

  friendSuggestions: defineTable({
    userId: v.id("users"),
    suggestedUserId: v.id("users"),
    commonSpaces: v.number(), // how many shared spaces
  }).index("by_user", ["userId"])
    .index("by_suggested", ["suggestedUserId"]),
});
