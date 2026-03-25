# Santhiram Hospitals

## Current State
Single-page application with all sections stacked vertically (Hero, About, Departments slideshow, Stats, WhyChooseUs, Doctors, Testimonials, AppointmentSection, Contact). No client-side routing. Departments section shows a 4-card slideshow; clicking "Book Appointment" scrolls to the #appointment anchor.

## Requested Changes (Diff)

### Add
- `DepartmentDetail` component: a full-page view for a selected department, shown instead of the main page when a department is clicked.
- Navigation state management in `App.tsx` using `useState<string | null>` to track the currently selected department slug.
- Back button / breadcrumb on the detail page to return to the home view (scrolled to #departments).
- Detailed content sections on the detail page: hero banner with dept image, key highlights/services list, conditions treated, why choose Santhiram for this dept, and an "Enquiry Now" / "Book Appointment" CTA.

### Modify
- `App.tsx`: lift `selectedDept` state; render `DepartmentDetail` when a dept is selected, otherwise render the normal page.
- `Departments.tsx`: make each card clickable (replace anchor with a button/callback) that sets the selected department.
- `Header.tsx`: department dropdown items should also navigate to the detail page instead of scrolling.

### Remove
- Nothing removed.

## Implementation Plan
1. Add `onSelectDept` prop to `Departments` component; each card "Book Appointment" becomes "Learn More" / "View Department" button that calls `onSelectDept(dept.name)`.
2. Pass `setSelectedDept` from `App.tsx` down to `Departments`.
3. Create `src/frontend/src/components/DepartmentDetail.tsx` with:
   - Fixed header still shown.
   - Hero area: full-width banner with dept image, gradient overlay, dept name.
   - Breadcrumb: Home > Departments > [Dept Name] with back link.
   - About the department: description + extended bullet points per dept.
   - Conditions Treated grid.
   - Why Choose Santhiram highlight boxes.
   - Book Appointment CTA scrolling to #appointment on the main page (navigate back first).
4. Update `Header.tsx` dropdown so dept items call `setSelectedDept`; thread the callback via a simple event bus or window custom event to avoid prop drilling through Header.
5. `App.tsx` listens for custom `selectDept` window event and updates state accordingly.
