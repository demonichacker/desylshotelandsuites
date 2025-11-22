"use client"

import { useState } from "react"
import { Edit2, Trash2, Plus } from "lucide-react"

const initialPosts = [
  {
    id: 1,
    title: "Top 5 Attractions Near Festac Town",
    excerpt: "Discover the best places to visit and things to do near DE-SYLS HOTELS & SUITES.",
    author: "Travel Team",
    date: "2024-10-15",
  },
  {
    id: 2,
    title: "How DE-SYLS Ensures EXCLUSIVE COMFORT",
    excerpt: "Learn about our commitment to providing the highest standards of comfort and hospitality.",
    author: "Management",
    date: "2024-09-28",
  },
  {
    id: 3,
    title: "Host Your Meeting with Style — Our Conference Services",
    excerpt: "Discover how DE-SYLS can be the perfect venue for your next corporate event.",
    author: "Events Team",
    date: "2024-09-10",
  },
]

export default function AdminBlog() {
  const [posts, setPosts] = useState(initialPosts)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    date: "",
  })

  const handleEdit = (post: any) => {
    setEditingId(post.id)
    setFormData(post)
  }

  const handleSave = () => {
    if (editingId) {
      setPosts(posts.map((p) => (p.id === editingId ? { ...formData, id: editingId } : p)))
      setEditingId(null)
    } else {
      setPosts([...posts, { ...formData, id: Date.now() }])
    }
    setFormData({ title: "", excerpt: "", author: "", date: "" })
  }

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">Blog Management</h2>
        <button
          onClick={() => {
            setEditingId(null)
            setFormData({ title: "", excerpt: "", author: "", date: "" })
          }}
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
        >
          <Plus size={20} />
          Add Post
        </button>
      </div>

      {/* Form */}
      <div className="bg-accent p-6 rounded mb-8">
        <h3 className="font-semibold mb-4">{editingId ? "Edit Post" : "Add New Post"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Post Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="px-4 py-2 border border-border rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="px-4 py-2 border border-border rounded"
          />
        </div>
        <textarea
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded mb-4 h-24 resize-none"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-primary text-secondary px-6 py-2 rounded font-semibold hover:opacity-80 transition-colors"
          >
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button
              onClick={() => setEditingId(null)}
              className="bg-border text-foreground px-6 py-2 rounded font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-accent p-6 rounded flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-bold mb-2">{post.title}</h3>
              <p className="text-muted mb-2">{post.excerpt}</p>
              <p className="text-sm text-muted">
                By {post.author} • {post.date}
              </p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleEdit(post)}
                className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
