interface Props {
    visible?: boolean;
}

export const LoadingCircular = ({ visible = false }: Props) => {
    return (
        <>
            {
                visible && (
                    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                        <div className="flex space-x-2 animate-pulse">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
