# Om uppgiften

I denna övning ska du skapa en **låneansökningsformulär** i **React**. Användaren ska kunna fylla i sina personliga och ekonomiska uppgifter och skicka en ansökan. Fokus ligger på att träna formulärhantering, state-hantering och enkel validering i React.

Den färdiga applikationen ska ha en **snygg design** och vara **responsiv** så att den fungerar både på dator och mobil.

# Case

# Vad du ska göra

- **Skapa ett nytt React-projekt** (t.ex. med `Vite`, `Create React App`, eller annan valfri setup).
- **Bygg en komponent** som heter t.ex. `LoanForm.jsx`.
- **Designa ett formulär** som innehåller följande fält:
  - **Namn** – Textinput.
  - **Telefonnummer** – Textinput, helst numeriskt.
  - **Ålder** – Nummerinput.
  - **Är du anställd?** – Checkbox.
  - **Din lön** – Dropdown / select-meny med olika löneintervall (exempel: "Mindre än $500", "$500 - $1000", "$1000 - $2000", "Över $2000").
  - **Lånebelopp** – Nummerinput.
  - **Syftet med lånet** – Textinput.
  - **Återbetalningstid i år** – Nummerinput.
  - **Kommentarer** – Textarea för extra meddelanden.
- **Lägg till en knapp "Send"** som användaren klickar på för att skicka sin ansökan.

## Funktionalitet

- **State-hantering**:
  - Använd `useState` för att hålla koll på formulärvärdena.
  - Varje inputfält ska vara kopplat till en state-variabel.
- **Hantering av skickat formulär**:
  - När användaren klickar på "Send":
    - Samla alla fältvärden i ett **JavaScript-objekt**.
    - Skriv ut objektet i konsolen med `console.log(ansökan)`.
- **Grundläggande validering**:
  - Säkerställ att **Namn**, **Telefonnummer**, och **Ålder** inte är tomma.
  - Om fält saknas, visa ett enkelt felmeddelande under det aktuella fältet eller som en alert.
- **Layout och design**:
  - Formuläret ska vara centrerat på sidan.
  - Använd en snygg bakgrund (gradient, solid färg eller bild).
  - Inputs och knappen ska ha rundade kanter och avstånd mellan sig.
  - Använd flexbox eller grid för att placera formuläret snyggt.
- **Responsivitet**:
  - Formuläret ska anpassa sig till olika skärmstorlekar (mobil, surfplatta, dator).
  - På mindre skärmar ska fälten staplas snyggt under varandra.

🧩 Component Structure
LoanForm.jsx – Main component (handles form state, submission, confirmation)

PersonalInfo.jsx – Name, phone, age

EmploymentInfo.jsx – Employment status, salary (with warning)

LoanDetails.jsx – Amount, purpose, repayment years

Comments.jsx – Additional comments

Confirmation.jsx – Success message
