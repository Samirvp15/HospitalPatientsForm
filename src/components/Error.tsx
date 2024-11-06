




export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-center bg-red-600 text-white
         my-4 font-bold uppercase p-3 text-sm">{children}</p>
    )
}
