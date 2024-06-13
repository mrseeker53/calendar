import React from "react";

const CustomModal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
				<div className="flex justify-end">
					<button
						className="text-gray-600 hover:text-gray-900"
						onClick={onClose}
					>
						X
					</button>
				</div>
				<div className="mt-4">{children}</div>
			</div>
		</div>
	);
};

export default CustomModal;
