# p2p-energy-provider

This repository contains a simple demo frontend for a peer to peer energy exchange platform. It uses **Vite** and **Vue 3** and stores all data in the browser's local storage. There is no backend or authentication logic – the focus is to showcase the basic workflow.

The styling is done with **Tailwind CSS** via a CDN include.

## Views

1. **Register** – collect user details (without a password). The user is stored in local storage and is automatically logged in.
2. **KYC / Offer** – a mock KYC check is performed and the user can enter:
   - Z&auml;hlpunktnummer
   - desired timeframe
   - desired price
3. **Prediction** – based on the chosen start time a very naive energy volume prediction is shown (8&nbsp;kWh/h at midday, 3&nbsp;kWh/h in the morning/evening, 0&nbsp;kWh at night).
4. **Energy Sold** – displays mock data of how much energy was sold and to whom.

## Development

```
npm install
npm run dev
```

This will start the Vite dev server on `http://localhost:5173`.

*Note: running `npm install` requires network access which is not available in some restricted environments.*
