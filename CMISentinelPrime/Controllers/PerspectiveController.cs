using CMISentinelPrime.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class PerspectiveController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: Perspective
        public ActionResult Index()
        {
            return View(db.PerspectiveSet.ToList());
        }

        // GET: Perspective/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            return View(perspective);
        }

        // GET: Perspective/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Perspective/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name")] Perspective perspective, int CmiId)
        {
            if (ModelState.IsValid)
            {
                db.PerspectiveSet.Add(perspective);
                db.SaveChanges();
                return RedirectToAction("Details", "CMI", new { id = CmiId });
            }

            return RedirectToAction("Index", "CMI");
        }

        // GET: Perspective/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            return View(perspective);
        }

        // POST: Perspective/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name")] Perspective perspective)
        {
            if (ModelState.IsValid)
            {
                db.Entry(perspective).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(perspective);
        }

        // POST: Perspective/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id, int CmiId)
        {
            Perspective perspective = db.PerspectiveSet.Find(id);
            if (perspective == null)
            {
                return HttpNotFound();
            }
            db.PerspectiveSet.Remove(perspective);
            db.SaveChanges();
            return RedirectToAction("Details", "CMI", new { id = CmiId });
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
