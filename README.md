# Public pack publisher sandbox

This disposable repository publishes a test pack to exercise independent catalog admission. It is not the production pack repository. It starts with a single source snapshot and no prior Git history.

The package name, repository and immutable version are isolated from production. Moderators decide admission in [the catalog sandbox](https://github.com/volter-ai/twin-catalog-sandbox).

The owner-dispatched release builds and assesses through task-owned Worlds, publishes immutable npm bytes with
repository provenance, confirms registry identity using the released catalog CLI, then opens a data PR from this
repository with the scoped publisher App. Catalog readiness starts from the PR event. The job never approves or
merges; its App token is revoked after the job. Failed proposals retain submission files for retries.
