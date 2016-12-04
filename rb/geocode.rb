#!/usr/bin/env ruby
# vim:ts=4:sw=4:et:smartindent:nowrap
require 'fileutils'
require 'kamelopard'
require 'json'
require 'pry'

include Kamelopard

Locations = [
                {   :address => 'New York, NY',  
                    :styleUrl => 'img/marker-office.png' },
                {   :address => 'Brooklyn, NY',
                    :styleUrl => 'img/marker-home.png' },
                {   :address => 'San Diego, CA',
                    :styleUrl => 'img/marker-home.png' },
                {   :address => 'Seattle, WA',
                    :styleUrl => 'img/marker-star.png' },
                    # Sail
                {   :address => 'Jersey City, NJ',
                    :styleUrl => 'img/marker-boat1.png' },
                {   :address => 'Port Washington, NY',
                    :styleUrl => 'img/marker-boat1.png' },
                    # MotoTrip2016-NXNE
                {   :address => 'Minneapolis, MN',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Hayward, WI',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Grand Marais, MI',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'South Baymouth, ON',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Elora, ON',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Batavia, NY',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Bainbridge, NY',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Hartford, CT',
                    :styleUrl => 'img/marker-moto1.png' },
                {   :address => 'Port Washington, NY',  
                    :styleUrl => 'img/marker-moto1.png' },
                    # MotoTrip2016-SXSW
                {   :address => 'Cape May, NJ',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Elizabeth City, NC',  
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Jacksonville, NC',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Aiken, GA',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Montgomery, AL',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'New Orleans, LA',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Beaumont, TX',
                    :styleUrl => 'img/marker-moto2.png' },
                {   :address => 'Austin, TX',
                    :styleUrl => 'img/marker-moto2.png' }
            ]
Sleep = 0.15
Outfile = 'poi.json' 

def geoCode()

    puts "Running geocode operations:"
    sleep(1)

    # Set Geocode API Key
    g = GoogleGeocoder.new('AIzaSyA3OnGpvefhlhYUSSvP7PAni2F-qE-vC8A')

    locations = []
    success = []
    failures = []
    # Send query for each Line in client CSV datasheets
    Locations.each do |poi|

        # initialize :data
        poi[:data] = []

        query = poi[:address] 
        poi[:data] << g.lookup(query)
        # Report findings
        status = poi[:data].last.fetch("status")
        STDOUT.puts "#{query}: #{status}"

        # Organize Results
        if status == "OK"

            success << poi[:data].last

            # Isolate geo
            geo = poi[:data][0]['results'][0].select {|v| v == 'geometry'}
            lat = geo['geometry']['location']['lat']
            lng = geo['geometry']['location']['lng']
            poi[:latitude] = lat
            poi[:longitude] = lng

            # Store in points 
            locations << poi

        else
            $log.warn("Geocode Error: #{query}")
            failures << poi[:data].last
        end

        sleep(Sleep)        

    end

    STDOUT.puts
    STDOUT.puts "Geocode Metrics:"
    STDOUT.puts "Successes: #{success.length}"
    STDOUT.puts "Failures: #{failures.length}"
    STDOUT.puts
    sleep(1)

    return locations


end

## Run Time Operations ##

# Call g.Geocoder
locations = geoCode

# Print results to Outfile
json = JSON.pretty_generate(locations)
f = File.new(Outfile,"w")
f.write(json)
f.close
