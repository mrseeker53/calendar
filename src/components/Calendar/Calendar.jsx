import React, { useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Calendar = () => {
	// State to manage current month
	const [currentMonth, setCurrentMonth] = useState(new Date());

	// Function to navigate to previous month
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	// Function to navigate to next month
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	return (
		<div className="calendar">
			<div className="header">
				<button onClick={prevMonth}>
					<RiArrowLeftSLine />
				</button>
                <h2>{format(currentMonth, "MMMM yyyy")}</h2>
				<button onClick={nextMonth}>
					<RiArrowRightSLine />
				</button>
			</div>
            {/* Calendar Days */}
		</div>
	);
};

export default Calendar;
