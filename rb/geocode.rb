#!/usr/bin/env ruby
# vim:ts=4:sw=4:et:smartindent:nowrap
require 'fileutils'
require 'kamelopard'
require 'json'
require 'pry'

include Kamelopard


Sleep = 0.15
Outfile = 'poi.json' 

Locations = [
                {   :address => 'New York, NY',  
                    :id => 'office' },
                {   :address => 'San Diego, CA',
                    :id => 'human' },
                {   :address => 'Seattle, WA',
                    :id => 'star' },
                    # Work
                {   :address => 'Denver, CO',
                    :id => 'office' },
                {   :address => 'Los Angeles, CA',
                    :id => 'office' },
                {   :address => 'San Fransisco, cA',
                    :id => 'office' },
                {   :address => 'Berlin, Germany',
                    :id => 'office' },
                {   :address => 'Ottawa, Canada',
                    :id => 'office' },
                {   :address => 'Paris, France',
                    :id => 'office' },
                {   :address => 'Seoul, South Korea',
                    :id => 'office' },
                {   :address => 'Warsaw, Poland',
                    :id => 'office' },
                    # Sail
                {   :address => 'Jersey City, NJ',
                    :id => 'sailing' },
                {   :address => 'Port Washington, NY',
                    :id => 'sailing' },
                    # MotoTrip2016-NXNE
                {   :address => 'Minneapolis, MN',
                    :id => 'motorcycle' },
                {   :address => 'Hayward, WI',
                    :id => 'motorcycle' },
                {   :address => 'Grand Marais, MI',
                    :id => 'motorcycle' },
                {   :address => 'South Baymouth, ON',
                    :id => 'motorcycle' },
                {   :address => 'Elora, ON',
                    :id => 'motorcycle' },
                {   :address => 'Batavia, NY',
                    :id => 'motorcycle' },
                {   :address => 'Bainbridge, NY',
                    :id => 'motorcycle' },
                {   :address => 'Hartford, CT',
                    :id => 'motorcycle' },
                {   :address => 'Port Washington, NY',  
                    :id => 'motorcycle' },
                    # MotoTrip2016-SXSW
                {   :address => 'Cape May, NJ',
                    :id => 'motorcycle' },
                {   :address => 'Elizabeth City, NC',  
                    :id => 'motorcycle' },
                {   :address => 'Jacksonville, NC',
                    :id => 'motorcycle' },
                {   :address => 'Aiken, GA',
                    :id => 'motorcycle' },
                {   :address => 'Montgomery, AL',
                    :id => 'motorcycle' },
                {   :address => 'New Orleans, LA',
                    :id => 'motorcycle' },
                {   :address => 'Beaumont, TX',
                    :id => 'motorcycle' },
                {   :address => 'Austin, TX',
                    :id => 'motorcycle' }
            ]

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

        query = poi[:address] 
        results =  g.lookup(query)
        # Report findings
        status = results.fetch("status")
        STDOUT.puts "#{query}: #{status}"

        # Organize Results
        if status == "OK"

            success << results 

            # Isolate geo
            geo = results.fetch('results')[0].select {|v| v == 'geometry'}
            lat = geo['geometry']['location']['lat']
            lng = geo['geometry']['location']['lng']
            poi[:lat] = lat
            poi[:lng] = lng

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
