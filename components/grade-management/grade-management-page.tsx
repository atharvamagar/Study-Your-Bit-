"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import { Header } from "../header"
import { Marquee } from "../marquee"
import { Footer } from "../footer"
import { ChatBot } from "../chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Save, Edit, CheckCircle, XCircle } from "lucide-react"

const mockGrades = [
  { id: 1, name: "Priya Sharma", course: "Political Science", assignment: "Essay 1", grade: 92 },
  { id: 2, name: "Rahul Patel", course: "Economics", assignment: "Quiz 1", grade: 85 },
  { id: 3, name: "Anjali Desai", course: "History", assignment: "Research Paper", grade: 88 },
  { id: 4, name: "Vikram Singh", course: "Political Science", assignment: "Essay 1", grade: 76 },
  { id: 5, name: "Meera Iyer", course: "Economics", assignment: "Quiz 1", grade: 91 }
]

export function GradeManagementPage() {
  const [grades, setGrades] = useState(mockGrades)
  const [editId, setEditId] = useState<number | null>(null)
  const [editValue, setEditValue] = useState("")

  const handleEdit = (id: number, current: number) => {
    setEditId(id)
    setEditValue(current.toString())
  }

  const handleSave = (id: number) => {
    setGrades(grades.map(g => g.id === id ? { ...g, grade: Number(editValue) } : g))
    setEditId(null)
    setEditValue("")
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-sky-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="min-h-screen bg-sky-50 flex flex-col">
            <Header isLoggedIn={true} onLoginToggle={() => {}} />
            <Marquee text="📝 Grade Management - Enter and review student grades efficiently!" />
            <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Card>
                <CardHeader>
                  <CardTitle>Grade Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Assignment</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {grades.map((g) => (
                        <TableRow key={g.id}>
                          <TableCell>{g.name}</TableCell>
                          <TableCell>{g.course}</TableCell>
                          <TableCell>{g.assignment}</TableCell>
                          <TableCell>
                            {editId === g.id ? (
                              <Input
                                type="number"
                                value={editValue}
                                onChange={e => setEditValue(e.target.value)}
                                className="w-20"
                                min={0}
                                max={100}
                              />
                            ) : (
                              g.grade
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            {editId === g.id ? (
                              <Button size="sm" onClick={() => handleSave(g.id)} className="bg-sky-600 hover:bg-sky-700 text-white mr-2">
                                <CheckCircle className="w-4 h-4 mr-1" />Save
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" onClick={() => handleEdit(g.id, g.grade)}>
                                <Edit className="w-4 h-4 mr-1" />Edit
                              </Button>
                            )}
                            {editId === g.id && (
                              <Button size="sm" variant="outline" onClick={() => setEditId(null)}>
                                <XCircle className="w-4 h-4 mr-1" />Cancel
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </main>
            <Footer />
          </div>
          <ChatBot />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
} 