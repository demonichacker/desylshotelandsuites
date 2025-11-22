"use client"

import { useState } from "react"
import { Edit2, Trash2, Plus } from "lucide-react"

const initialRooms = [
  {
    id: 1,
    name: "Executive Class",
    price: 110000,
    size: 42,
    sleeps: 2,
    description: "Spacious suite with king bed, work desk, mini-bar, and private balcony.",
  },
  {
    id: 2,
    name: "Business Class",
    price: 100000,
    size: 28,
    sleeps: 2,
    description: "Comfortable room with plush bedding and elegant décor.",
  },
  {
    id: 3,
    name: "Royale Special",
    price: 90000,
    size: 65,
    sleeps: 4,
    description: "Two-bedroom suite ideal for families with living area and kitchenette.",
  },
  {
    id: 4,
    name: "Classic",
    price: 80000,
    size: 18,
    sleeps: 1,
    description: "Cozy single room for solo travelers on a budget.",
  },
]

export default function AdminRooms() {
  const [rooms, setRooms] = useState(initialRooms)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    size: 0,
    sleeps: 1,
    description: "",
  })

  const handleEdit = (room: any) => {
    setEditingId(room.id)
    setFormData(room)
  }

  const handleSave = () => {
    if (editingId) {
      setRooms(rooms.map((r) => (r.id === editingId ? { ...formData, id: editingId } : r)))
      setEditingId(null)
    } else {
      setRooms([...rooms, { ...formData, id: Date.now() }])
    }
    setFormData({ name: "", price: 0, size: 0, sleeps: 1, description: "" })
  }

  const handleDelete = (id: number) => {
    setRooms(rooms.filter((r) => r.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">Rooms Management</h2>
        <button
          onClick={() => {
            setEditingId(null)
            setFormData({ name: "", price: 0, size: 0, sleeps: 1, description: "" })
          }}
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
        >
          <Plus size={20} />
          Add Room
        </button>
      </div>

      {/* Form */}
      <div className="bg-accent p-6 rounded mb-8">
        <h3 className="font-semibold mb-4">{editingId ? "Edit Room" : "Add New Room"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Room Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="number"
            placeholder="Price per night"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="number"
            placeholder="Size (m²)"
            value={formData.size}
            onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="number"
            placeholder="Sleeps"
            value={formData.sleeps}
            onChange={(e) => setFormData({ ...formData, sleeps: Number(e.target.value) })}
            className="px-4 py-2 border border-border rounded"
          />
        </div>
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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

      {/* Rooms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-accent p-6 rounded">
            <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
            <p className="text-muted text-sm mb-4">{room.description}</p>
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
              <div>
                <p className="text-muted">Price</p>
                <p className="font-semibold">₦{room.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted">Size</p>
                <p className="font-semibold">{room.size} m²</p>
              </div>
              <div>
                <p className="text-muted">Sleeps</p>
                <p className="font-semibold">{room.sleeps}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(room)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary py-2 rounded font-semibold hover:opacity-80 transition-colors"
              >
                <Edit2 size={18} />
                Edit
              </button>
              <button
                onClick={() => handleDelete(room.id)}
                className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600 transition-colors"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
