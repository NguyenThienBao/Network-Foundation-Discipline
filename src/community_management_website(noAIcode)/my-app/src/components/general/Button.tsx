export default function Button({ name }: { name: string }) {
    return (
        <button className="bg-sfalightblue custom-text-normal px-4 py-2 rounded border-solid border-1 border-sfadarkgray">
            {name}
        </button>
    );
}