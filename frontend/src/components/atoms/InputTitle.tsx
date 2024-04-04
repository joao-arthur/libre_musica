type props = {
    children: string;
};

export function InputTitle({ children }: props) {
    return <h3 className="text-lg">{children}</h3>;
}
