"use client";

import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import DeleteButton from "./DeleteButton";
import { Pencil } from "lucide-react";

export default function EntityTable({ title, data, columns, entity, keys }) {
  return (
    <section className="space-y-4 p-6 bg-white shadow border rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link
          href={`/dashboard/entities/${entity}/create`}
          className="shadow bg-teal-600 text-sm px-4 py-1 font-medium hover:underline"
        >
          <span className="text-white">Add {title.slice(0, -1)}</span>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col}>{col}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="hover:bg-slate-50">
              {keys.map((k) => (
                <TableCell key={k}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {row[k]}
                  </motion.div>
                </TableCell>
              ))}
              <TableCell className="flex gap-2">
                <Link
                  href={`/dashboard/entities/${entity}/edit/${row.id}`}
                  className="text-teal-700 hover:underline"
                >
                  <Pencil size={14} />
                </Link>
                <DeleteButton entity={entity} id={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}