// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import PlantsLayout from 'src/layouts/PlantsLayout'

import CollectionsLayout from 'src/layouts/CollectionsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/plantlist/{id}" page={PlantlistPage} name="plantlist" />
      <Set wrap={PlantsLayout}>
        <Route path="/plants/new" page={PlantNewPlantPage} name="newPlant" />
        <Route path="/plants/{id:Int}/edit" page={PlantEditPlantPage} name="editPlant" />
        <Route path="/plants/{id:Int}" page={PlantPlantPage} name="plant" />
        <Route path="/plants" page={PlantPlantsPage} name="plants" />
      </Set>
      <Set wrap={CollectionsLayout}>
        <Route path="/collections/new" page={CollectionNewCollectionPage} name="newCollection" />
        <Route path="/collections/{id:Int}/edit" page={CollectionEditCollectionPage} name="editCollection" />
        <Route path="/collections/{id:Int}" page={CollectionCollectionPage} name="collection" />
        <Route path="/collections" page={CollectionCollectionsPage} name="collections" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
