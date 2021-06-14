export interface Planet {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: string[]
  films: string[]
  url: string
  created: string
  edited: string
}

export type PlanetKey = keyof Planet

export interface Starship {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: string[]
  pilots: string[]
  url: string
  created: string
  edited: string
}
