# Fitness App - Drag and Drop Chart Management

## Overview
The **Fitness App** leverages the `react-beautiful-dnd` library to offer an intuitive drag-and-drop interface for workout chart management. This application allows users to plan their workouts dynamically by adding and organizing bars in a chart area, resizing the chart based on content, and saving progress for future use.

### Features
1. **Drag and Drop Functionality**:
   - Powered by the `react-beautiful-dnd` library, users can seamlessly drag workout bars from the left panel and drop them into the chart area.

2. **Dynamic Chart Updates**:
   - Each bar dropped into the chart creates an additional active bar below, representing the kilometers covered.
   - Users can extend the workout plan by adding substeps using the "Add Substep" button.

3. **Delete Bars**:
   - Users can remove any bar from the chart after it has been added, providing flexibility in modifying the workout plan.

4. **Adaptive Chart Scaling**:
   - The application automatically adjusts the size of the bars and scales the chart based on the total number of bars added, ensuring a clear and proportional display.

5. **Clear All Data**:
   - A "Clear All" button allows users to reset the entire chart by removing all bars and substeps.

6. **Save Progress**:
   - The "Save Workout" button enables users to save their current workout plan.
   - Changes made to the chart are automatically saved to local storage, ensuring no loss of data between sessions.

7. **Responsive Design**:
   - Built with **Bootstrap** and **Material-UI**, the app offers a responsive user interface, optimized for various devices and screen sizes.

---

## Installation and Setup

### Prerequisites
To run this application, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps
1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd fitness-app
   ```

2. Install the required dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Usage
1. Drag workout bars from the left panel and drop them into the chart area.
2. Add substeps to enhance your workout details.
3. Delete any unwanted bar by selecting the delete option.
4. Save your progress by clicking on the "Save Workout" button.
5. Clear all data using the "Clear All" button if you wish to start fresh.
6. Rest assured, all changes are automatically saved to local storage for persistence.

---

## Dependencies
- **React**
- **react-beautiful-dnd**
- **Bootstrap**
- **Material-UI**

### Optional Dependencies
- `prop-types` for runtime type-checking (optional but recommended).

---

## Advantages
1. Provides an interactive and user-friendly drag-and-drop interface.
2. Fully responsive design that adapts to all devices.
3. Automatically saves progress in local storage, preventing accidental data loss.
4. Dynamic chart resizing ensures a clean and organized display.

---

## Disadvantages
1. Limited storage capacity in local storage; excessive data may not be saved.
2. Performance may degrade with a large number of bars or substeps.
3. Requires modern browsers to support drag-and-drop functionality effectively.

---

## Deployment
The application is deployed on **Netlify**, making it accessible online.

### Netlify Link
[Fitness App on Netlify](<insert-your-netlify-link-here>)

---

## Future Enhancements
1. Integration with cloud storage for enhanced data persistence.
2. Real-time collaboration features for multiple users.
3. Additional customization options for charts and data representation.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed description of your changes.

---

