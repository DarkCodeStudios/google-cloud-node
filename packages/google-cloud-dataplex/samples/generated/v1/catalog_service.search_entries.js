// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name, query) {
  // [START dataplex_v1_generated_CatalogService_SearchEntries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project to which the request should be attributed in the
   *  following form: `projects/{project}/locations/{location}`.
   */
  // const name = 'abc123'
  /**
   *  Required. The query against which entries in scope should be matched.
   */
  // const query = 'abc123'
  /**
   *  Optional. Pagination.
   */
  // const pageSize = 1234
  /**
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Ordering of the results. Supported options to be added later.
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. The scope under which the search should be operating. Should
   *  either be organizations/<org_id> or projects/<project_ref>. If left
   *  unspecified, it will default to the organization where the project provided
   *  in `name` is located.
   */
  // const scope = 'abc123'

  // Imports the Dataplex library
  const {CatalogServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new CatalogServiceClient();

  async function callSearchEntries() {
    // Construct request
    const request = {
      name,
      query,
    };

    // Run request
    const iterable = dataplexClient.searchEntriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchEntries();
  // [END dataplex_v1_generated_CatalogService_SearchEntries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
