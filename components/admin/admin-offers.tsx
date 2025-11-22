"use client"

import { useState } from "react"
import { Edit2, Trash2, Plus } from "lucide-react"

const initialOffers = [
  {
    id: 1,
    title: "Weekend Escape",
    discount: "10%",
    description: "Book Friday to Sunday and get 10% off your stay",
    validUntil: "2025-12-31",
  },
  {
    id: 2,
    title: "Romance Package",
    discount: "Special",
    description: "Room + Dinner + Bottle of Sparkling Wine",
    validUntil: "2025-12-31",
  },
  {
    id: 3,
    title: "Conference Deal",
    discount: "Group",
    description: "Special rates for events over 30 guests",
    validUntil: "2025-12-31",
  },
]

export default function AdminOffers() {
  const [offers, setOffers] = useState(initialOffers)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    discount: "",
    description: "",
    validUntil: "",
  })

  const handleEdit = (offer: any) => {
    setEditingId(offer.id)
    setFormData(offer)
  }

  const handleSave = () => {
    if (editingId) {
      setOffers(offers.map((o) => (o.id === editingId ? { ...formData, id: editingId } : o)))
      setEditingId(null)
    } else {
      setOffers([...offers, { ...formData, id: Date.now() }])
    }
    setFormData({ title: "", discount: "", description: "", validUntil: "" })
  }

  const handleDelete = (id: number) => {
    setOffers(offers.filter((o) => o.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">Offers Management</h2>
        <button
          onClick={() => {
            setEditingId(null)
            setFormData({ title: "", discount: "", description: "", validUntil: "" })
          }}
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
        >
          <Plus size={20} />
          Add Offer
        </button>
      </div>

      {/* Form */}
      <div className="bg-accent p-6 rounded mb-8">
        <h3 className="font-semibold mb-4">{editingId ? "Edit Offer" : "Add New Offer"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Offer Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="text"
            placeholder="Discount (e.g., 10%, Special)"
            value={formData.discount}
            onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
            className="px-4 py-2 border border-border rounded"
          />
          <input
            type="date"
            value={formData.validUntil}
            onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
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

      {/* Offers List */}
      <div className="space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-accent p-6 rounded flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-bold mb-2">{offer.title}</h3>
              <p className="text-muted mb-2">{offer.description}</p>
              <p className="text-sm text-muted">Valid until: {offer.validUntil}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleEdit(offer)}
                className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded font-semibold hover:opacity-80 transition-colors"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete(offer.id)}
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
